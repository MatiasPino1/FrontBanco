import React, { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
const UsersInfo = () => {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState(0);
  const [filtered, setFiltered] = useState("");
  const navigate = useNavigate()
  const data = null;
  useEffect(() => {
    fetch("https://apibancoasenjopino.herokuapp.com/admin", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = async (param) => {
    await fetch(`https://apibancoasenjopino.herokuapp.com/admin/${param}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      
    });navigate("/adminsite/");};
  return (
    <>
      <div className="bg container text-center d-flex">
        <section className=" table-section">
          <div className="bg1 px-4 py-2 mt-5 text-center container ">
            <h2>General Users Info </h2>
          </div>
          <input
            className="m-5 px-3 py-2 font-monospace border rounded-3"
            onChange={(e) => setFiltered(String(e.target.value))}
            placeholder="Search by User Name"
          ></input>
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr className="d-flex  align-items-center justify-content-around ">
                  <th>User Name</th>
                  <th>Completed Name</th>
                  <th>Email</th>
                  <th>Savings Bank</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              {users
                .filter(({ username }) => username.includes(filtered))
                .map((e) => {
                  return (
                    <tbody>
                      <tr className="d-flex  align-items-center justify-content-around ">
                        <td>{e.username}</td>
                        <td>{e.completedName}</td>
                        <td>{e.email}</td>
                        <td>{e.savingsBank}</td>

                        <Link
                          type="submit"
                          className="navbar-brand m-4 button-85"
                          onClick={() => deleteUser(e.savingsBank)}
                          to={"/adminsite/usersinfo"}
                        >
                          Delete
                        </Link>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default UsersInfo;
