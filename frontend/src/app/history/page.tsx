"use client";
import Navbar from '@/components/navbar';
import { useState } from 'react';


export default function history() {
    // temp data
  const [decisions, setDecisions] = useState([
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', doi: '10.1234/ijse.2019.00123', dateSubmitted: '21/05/2024', lastModified: '23/05/2024', decision: 'accepted' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', doi: '10.1234/ijse.2019.00123', dateSubmitted: '18/05/2024', lastModified: '23/05/2024', decision: 'pending' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', doi: '10.1234/ijse.2019.00123', dateSubmitted: '3/05/2024', lastModified: '23/05/2024', decision: 'accepted' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', doi: '10.1234/ijse.2019.00123', dateSubmitted: '24/04/2024', lastModified: '28/04/2024', decision: 'rejected' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', doi: '10.1234/ijse.2019.00123', dateSubmitted: '17/03/2024', lastModified: '17/03/2024', decision: 'accepted' },
  ]);

  const handleDecisionChange = (index, newDecision) => {
    const updatedDecisions = [...decisions];
    updatedDecisions[index].decision = newDecision;
    setDecisions(updatedDecisions);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mt-5">SPEED App</h1>
      <Navbar/>
      <h3>Moderation History</h3>
      <p>15 article suggestions moderated</p>
      <table className="table table-dark table-striped align-middle">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">DOI</th>
            <th scope="col">Date submitted</th>
            <th scope="col">Last modified</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {decisions.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.doi}</td>
              <td>{item.dateSubmitted}</td>
              <td>{item.lastModified} 
                <span className={item.decision === 'accepted' ? 'text-success' : item.decision === 'rejected' ? 'text-danger' : 'text-warning'}>({item.decision.charAt(0).toUpperCase() + item.decision.slice(1)})</span></td>
              <td>
                <select
                  className="form-select decision-select"
                  value={item.decision}
                  onChange={(e) => handleDecisionChange(index, e.target.value)}
                >
                  <option value="accepted" className="text-success">Accepted</option>
                  <option value="pending" className="text-warning">Pending</option>
                  <option value="rejected" className="text-danger">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}