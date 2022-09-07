import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ userFirstName, userLastName, userPhone });
  };
  return (
    <form style={style.form.container} onSubmit={handleSubmit}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={userFirstName}
        onChange={(e) => setUserFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={userLastName}
        onChange={(e) => setUserLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        onSubmit={handleSubmit}
      />
    </form>
  );
}

function InformationTable(props) {
  const { entries } = props;
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody style={{ marginTop: ".5em" }}>
        {entries.map((entry, key) => (
          <tr key={key}>
            <td>{entry.userFirstName}</td>
            <td>{entry.userLastName}</td>
            <td>{entry.userPhone}</td>
          </tr>
        ))}
      </tbody>{" "}
    </table>
  );
}

function App(props) {
  const [entryPhoneBook, setEntryPhoneBook] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setEntryPhoneBook([...entryPhoneBook, entry]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entryPhoneBook} />
    </section>
  );
}

export default App;
