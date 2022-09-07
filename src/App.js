import React, { useState } from "react";

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
      width: "max-content",
      marginBottom: "40px",
      backgroundColor: "white",
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
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
        className="userFirstname bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="userFirstname"
        type="text"
        value={userFirstName}
        onChange={(e) => setUserFirstName(e.target.value)}
        required
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="userLastname"
        type="text"
        value={userLastName}
        onChange={(e) => setUserLastName(e.target.value)}
        required
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="userPhone"
        type="number"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
        required
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
            <td style={style.tableCell}>{entry.userFirstName}</td>
            <td style={style.tableCell}>{entry.userLastName}</td>
            <td style={style.tableCell}>{entry.userPhone}</td>
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
    <section className="flex flex-col m-20 p-5 bg-white">
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entryPhoneBook} />
    </section>
  );
}

export default App;
