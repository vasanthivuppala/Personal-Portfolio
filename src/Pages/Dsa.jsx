import "../Pagescss/Dsa.css";
import { useState,useEffect } from "react";
import DsaChart from "../components/DsaChart";
function Dsa() {
  const [selectedPlatform, setSelectedPlatform] =useState("LeetCode");
  const [stats, setStats] = useState(null);
 useEffect(() => {
  fetch("http://localhost:5000/api/dsa")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setStats(data);
    });
}, []);
console.log("Stats:", stats);
if (!stats) {
    return <div>Loading...</div>;
  }
  return (
    <section className="dsa">

      <div className="dsa-container">

        {/* Left Side */}

        <div className="dsa-left">

          <div className="dsa-card">
         <h3>
  {stats
    ? stats.leetcode.solved +
      stats.codechef.solved +
      stats.codeforces.solved
    : 0}
</h3>
<p>Problems Solved</p>
          </div>

          <div className="dsa-card">
            <h3>3</h3>
            <p>Platforms</p>
          </div>

          <div className="dsa-card">
            <h3>10+</h3>
            <p>DSA Topics</p>
          </div>

        </div>

        {/* Right Side */}

        <div className="dsa-right">

         <div className="chart-card">


<DsaChart
  stats={stats}
  onPlatformClick={setSelectedPlatform}
/>

  <div className="platform-details">

   {selectedPlatform === "LeetCode" && (
  <>
    <h4>LeetCode</h4>

    <p>🧩 Problems Solved: {stats.leetcode.solved}</p>

    <p>🟢 Easy: {stats.leetcode.easy}</p>

    <p>🟡 Medium: {stats.leetcode.medium}</p>

    <p>🔴 Hard: {stats.leetcode.hard}</p>

    <p>🏆 Contest Rating: {stats.leetcode.rating}</p>
  </>
)}

    {selectedPlatform === "CodeChef" && (
  <>
    <h4>CodeChef</h4>
    <p>🧩 Problems Solved: {stats.codechef.solved}</p>

    <p>🏆 Rating: {stats.codechef.rating}</p>


    <p>🌍 Global Rank: {stats.codechef.globalRank}</p>

  </>
)}

   {selectedPlatform === "Codeforces" && (
  <>
    <h4>Codeforces</h4>

    <p>🧩 Problems Solved: {stats.codeforces.solved}</p>

    <p>🏆 Rating: {stats.codeforces.rating}</p>

    <p>⭐ Rank: {stats.codeforces.rank}</p>

    <p>📈 Max Rating: {stats.codeforces.maxRating}</p>

    <p>🥇 Best Rank: {stats.codeforces.maxRank}</p>
  </>
)}

  </div>

</div> 

        </div>

      </div>

    </section>
  );
}

export default Dsa;