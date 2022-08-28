import React from 'react';

const Information = () => {
	return (
		<table className='border-collapse border border-slate-400 m-auto w-full'>
			<thead>
				<tr>
					<th className='border border-slate-300 text-yellow-500'>Altura</th>
					<th className='border border-slate-300 text-yellow-500'>Peso</th>
					<th className='border border-slate-300 text-yellow-500'>Sexo</th>
					<th className='border border-slate-300 text-yellow-500'>Categoría</th>
					<th className='border border-slate-300 text-yellow-500'>Habilidad</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className='border border-slate-300'>0,7 m</td>
					<td className='border border-slate-300'>6,9 kg</td>
					<td className='border border-slate-300'>M</td>
					<td className='border border-slate-300'>Semilla</td>
					<td className='border border-slate-300'>Espesura</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Information;
