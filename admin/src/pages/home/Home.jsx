import {FeaturedInfo, Chart, WidgetSm, WidgetLg, Topbar, Sidebar } from "../../components/index";
import "./home.css";
import { userData } from "../../dummyData";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { apiRoute } from "../../utils/apiRoute";


export default function Home() {

  const MONTHS = useMemo(() => [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ], [])

  const [stats, setStats] = useState(null)

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(apiRoute + 'users/stats', {
          headers: {
            token: `Bearer ` + localStorage.getItem('user').accessToken
          }
        })

        const statsList = res.data.sort((a, b) => a._id - b._id)
        statsList.map((item) => 
          setStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1], 'Total Users': item.total
            }
          ])
        )
      } catch (error) {
        console.error(error)
      }
    }
    getStats()
  }, [MONTHS])

  console.log(stats)
  
  return (
    
    <div className="i"> 
    <Topbar />
    <section className="container">
    <Sidebar />
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </section>
    </div>
  );
}
