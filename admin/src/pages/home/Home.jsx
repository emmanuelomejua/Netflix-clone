import {FeaturedInfo, Chart, WidgetSm, WidgetLg } from "../../components/index";
import "./home.css";
import { userData } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiRoute } from "../../utils/apiRoute";


export default function Home() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(apiRoute + 'users/stats', {
          headers: {
            token: `Bearer `
          }
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  }, [])
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
