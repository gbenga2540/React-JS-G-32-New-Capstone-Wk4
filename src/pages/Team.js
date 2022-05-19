import React, { useState, useEffect } from "react";
import styles from "./Team.module.css";
import axios from "axios";

const Team = ({ setPageNumber }) => {
  setPageNumber(3);

  const [members, setMembers] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);
  const url = "https://fakerapi.it/api/v1/persons?_quantity=10";
  const getTeam = async () => {
    axios.get(`${url}`).then(res => {
      const member = res.data.data;
      setMembers(member);
    });
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Team Members</h1>
      <table className={styles.t}>
        <tr className={styles.thead}>
          <th>Image</th>
          <th>Full Name</th>
          <th>Email</th>
          <th className={styles.phone}>Phone No</th>
          <th>Gender</th>
        </tr>
        {members.map(per => (
          <div>
            <li key={per.id} className={styles.members}>
              <div className={styles.member}>
                <img className={styles.photo} src={per.image} alt="member " />
                <p>{per.firstname + " " + per.lastname}</p>
                <p>{per.email}</p>
                <p>{per.phone}</p>
                <p>{per.gender.charAt(0).toUpperCase()}</p>
              </div>
            </li>
          </div>
        ))}
      </table>
    </div>
  );
};

export default Team;
