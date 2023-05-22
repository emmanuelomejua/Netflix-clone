import {FeaturedInfo, Chart, WidgetSm, WidgetLg } from "../../components/index";
import "./home.css";
import { userData } from "../../dummyData";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { apiRoute } from "../../utils/apiRoute";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjYzNDBkYTEzODE0NmM5MmMyYjM4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDY4NzcxNywiZXhwIjoxNjg1MjkyNTE3fQ.8qzclHh2Fau29pI6rLdQ3vsaa17mECOUEnnzAw5woy4'

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
            token: `Bearer ${TOKEN}`
          }
        })

        const statsList = res.data.sort((a, b) => a._id - b._id)
        statsList.map(item => setStats([{name: MONTHS[item._id - 1], 'Total Users': item.total}]))
      } catch (error) {
        console.error(error)
      }
    }
    getStats()
  }, [MONTHS])

  // console.log(stats)
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
