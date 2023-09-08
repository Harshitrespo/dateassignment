import React, { useState } from 'react';
import moment from 'moment';

function DateFilter() {
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(
    moment().add(1, 'year').format('YYYY-MM-DD')
  );

  const [dropdown1Value, setDropdown1Value] = useState('All');
  const [dropdown2Value, setDropdown2Value] = useState('Sunday');
  const [dropdown3Value, setDropdown3Value] = useState('Month');
  const [filterDate, setFilterDate] = useState('');

  const handleDropdown1Change = (e) => {
    setDropdown1Value(e.target.value);
  };

  const handleDropdown2Change = (e) => {
    setDropdown2Value(e.target.value);
  };

  const handleDropdown3Change = (e) => {
    setDropdown3Value(e.target.value);
  };

  const generateDates = () => {
    const results = [];
    const current = moment(startDate);
    const end = moment(endDate);

    while (current.isSameOrBefore(end)) {
      if (
        (dropdown3Value === 'Month' &&
          current.format('dddd') === dropdown2Value &&
          (dropdown1Value === 'All' ||
            current.date() === parseInt(dropdown1Value))) ||
        (dropdown3Value === 'Week' && current.format('dddd') === dropdown2Value)
      ) {
        results.push(current.format('MMMM D, YYYY'));
      }

      current.add(1, dropdown3Value);
    }

    return results;
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
    const filteredDates = generateDates();
    setFilterDate(JSON.stringify(filteredDates));
    console.log('Filtered Dates:', filteredDates);
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <select value={dropdown1Value} onChange={handleDropdown1Change}>
        <option value="All">All</option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        {/* Add other options for Dropdown 1 */}
      </select>
      <select value={dropdown2Value} onChange={handleDropdown2Change}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        {/* Add other options for Dropdown 2 */}
      </select>
      <select value={dropdown3Value} onChange={handleDropdown3Change}>
        <option value="Month">Month</option>
        <option value="Week">Week</option>
        {/* Add other options for Dropdown 3 */}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <h1>Filter Dates</h1>
        <h1>{filterDate}</h1>
      </div>
    </div>
  );
}

export default DateFilter;
