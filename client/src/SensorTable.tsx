import React from 'react';
import { Table } from 'react-bootstrap';

interface Props{
	data: Sensor[],
	error: any
}

const SensorTable = ({data, error}: Props) => (
	<Table>
	{
		error
			? error
			:(
				<>
				<thead>
					<tr>
						<th> Eka </th>
						<th> Toka </th>
						<th> Kolmas </th>
					</tr>
				</thread>
				<tbody>
				{
					data.map( ({name, firstonline, lastonline}) => (
						<tr key={name}>
							<td>{name} </td>
							<td>{firstonline} </td>
							<td>{lastonline} </td>
						</tr>
					))
				}
				</tbody>
			)	
	}
	</Table>
);

export default SensorTable;