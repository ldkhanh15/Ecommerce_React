import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';
import faker from 'faker';
import { Pie, Bar } from 'react-chartjs-2';
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import { getOverview } from '@/services/overview';
import { AiFillTag, AiOutlineArrowDown } from 'react-icons/ai';
import { FaArrowUp, FaProductHunt } from 'react-icons/fa';
import { CiShop } from 'react-icons/ci';
import { FaUserGroup } from 'react-icons/fa6';
import { RiMoneyCnyBoxLine } from 'react-icons/ri';
import Loading from '@/components/Loading/Loading';
const cx = classNames.bind(styles)
ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, ArcElement);

const DashBoard = () => {
  const [data, setData] = useState([])
  const [status, setStatus] = useState({})
  const [bar, setBar] = useState({})
  const [loading, setLoading] = useState(false)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };
  useEffect(() => {
    const getData = async () => {
      let res = await getOverview();
      setData(res);
      let labels = [], dataValue = []
      res.bill.map((bill) => {
        labels.push(bill.status.status)
        dataValue.push(bill.totalBills)
      })
      let labelBar = [], valueBar = []
      for (let i = res.revenue.length - 1; i >= 0; i--) {
        labelBar.push(res.revenue[i].date)
        valueBar.push(res.revenue[i].totalPrice)
      }
      const dataBar = {
        labels: labelBar,
        datasets: [
          {
            label: '$',
            data: valueBar.map((price) => price),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }
      setBar(dataBar)
      let billStatus = {
        labels: [...labels],
        datasets: [
          {
            label: '# of Votes',
            data: dataValue,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      setStatus(billStatus)
    }
    setLoading(true)
    getData();
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  let revenue = data?.bill?.reduce((acc, cur) => {
    return acc + cur.totalPrice
  }, 0)

  return (
    <>

      {
        loading ? <Loading /> : <section className={cx('container')} >
          <div className={cx('overview')}>
            <div className={cx(['item', 'bill'])}>
              <div className={cx('left')}>
                <div className={cx('total')}>
                  {data?.bill?.length}
                </div>
                <p>
                  Purchases
                </p>
                <p>
                  <FaArrowUp /> 3% from last month
                </p>
              </div>
              <div className={cx('right')}>
                <CiShop className={cx('icon')} />
              </div>
            </div>
            <div className={cx(['item', 'product'])}>
              <div className={cx('left')}>
                <div className={cx('total')}>
                  {data?.product}
                </div>
                <p>
                  Products
                </p>
                <p>
                  <FaArrowUp /> 3% from last month
                </p>
              </div>
              <div className={cx('right')}>
                <FaProductHunt className={cx('icon')} />
              </div>
            </div>
            <div className={cx(['item', 'customer'])}>
              <div className={cx('left')}>
                <div className={cx('total')}>
                  {data?.user}
                </div>
                <p>
                  Customer
                </p>
                <p>
                  <FaArrowUp /> 3% from last month
                </p>
              </div>
              <div className={cx('right')}>
                <FaUserGroup className={cx('icon')} />
              </div>
            </div>
            <div className={cx(['item', 'revenue'])}>
              <div className={cx('left')}>
                <div className={cx('total')}>
                  {revenue?.toFixed(2)}$
                </div>
                <p>
                  Revenue
                </p>
                <p>
                  <FaArrowUp /> 3% from last month
                </p>
              </div>
              <div className={cx('right')}>
                <RiMoneyCnyBoxLine className={cx('icon')} />
              </div>
            </div>
          </div>
          <div className={cx('char')}>
            <div className={cx('left')}>
              {
                bar?.labels?.length > 0 ? <Bar options={options} data={bar} /> : null
              }
            </div>
            <div className={cx('right')}>

              {
                status?.labels?.length > 0 ? <Pie data={status} /> : null
              }
            </div>
          </div>
          <div className={cx('top-product')}>
            <table>
              <thead>
                <tr>
                  <td>STT</td>
                  <td>Name</td>
                  <td>Sold</td>
                  <td>Star</td>
                  <td>Shop</td>
                </tr>
              </thead>
              <tbody>
                {
                  data?.topProduct?.length > 0 ? data.topProduct.map((item, index) => {
                    let avgStar = item?.product?.review?.reduce((acc, cur) => {
                      return acc + cur.star
                    }, 0)
                    if (item?.product?.review?.length > 0) avgStar /= item?.product?.review.length
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.product?.name}</td>
                        <td>{item.total_sold}</td>
                        <td>{avgStar}</td>
                        <td>{item.product?.shop?.name}</td>
                      </tr>
                    )
                  }) : null
                }
              </tbody>
            </table>
          </div>
        </section >
      }
    </>
  )
}

export default DashBoard