import React, { useState } from 'react';
import styled from 'styled-components';
import Col from 'reactstrap/lib/Col';
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
import Table from 'reactstrap/lib/Table';

const NoContentContainer = styled.div`
  width: 100vw;
  height: 200px;
  background-color: blue;
`;

function Users() {
  const [condidates, seetConditades] = useState([]);

  function renderTableTitles() {
    return (
      <thead className="text-primary">
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Empresa</th>
          <th className="text-right">Status</th>
        </tr>
      </thead>
    );
  }

  return (
    <Col className="content" md="12">
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Vagas</CardTitle>
          <Table responsive>
            {renderTableTitles()}
            <tbody>
              <tr>
                <td>Dakota Rice</td>
                <td>Niger</td>
                <td>Oud-Turnhout</td>
                <td className="text-right">$36,738</td>
              </tr>
            </tbody>
          </Table>
        </CardHeader>
      </Card>
    </Col>
  );
}

export default Users;
