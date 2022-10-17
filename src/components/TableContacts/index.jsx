import './style.css';
import iconEditContact from '../../assets/Icon-Pencil.svg';
import iconDelete from '../../assets/Icon-trash.svg';

export default function TableContacts({ rows, handleEditContact, handleModalDelete }) {

    return (
        <div className='div-table'>
            <table>
                <thead>
                    <tr className='title'>
                        <th className='row-th-title'>Nome</th>
                        <th className='row-th-title'>Email</th>
                        <th className='row-th-title'>Telefone</th>
                        <th className='row-th-title'></th>
                    </tr>
                </thead>
                <tbody>

                    {rows.map((row) => (
                        <tr className='title'
                            key={row.id}
                        >
                            <th className='row-th-title name'>
                                {row.nome}
                            </th>
                            <th className='row-th-title '>{row.email}  </th>
                            <th className='row-th-title telephone'>{row.telefone}  </th>
                            <th className='row-th-title'>
                                {
                                    <div className='div-icons-contacts'>
                                        <button onClick={() => handleEditContact(row)} >
                                            <img src={iconEditContact} alt='clique para editar contato' />
                                        </button>
                                        <button onClick={() => handleModalDelete(row)}>
                                            <img src={iconDelete} alt='clique para excluir o  contato' />
                                        </button>
                                    </div>
                                }
                            </th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}



/* component={Paper}
sx={{ maxWidth: '80vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<Table
    sx={{ minWidth: 650, maxWidth: '80vw', }} size="small" aria-label="a dense table">
    <TableHead>
        <TableRow
            sx={{ minWidth: 650, backgroundColor: '#F4F0F0', overflowX: 'auto' }}>

            <TableCell
                sx={{
                    fontSize: '1.6rem',
                    width: '25%'
                }}
            >Nome</TableCell>
            <TableCell
                align="left"
                sx={{ fontSize: '1.6rem', width: '25%' }}
            >Email</TableCell>
            <TableCell
                align="left"
                sx={{ fontSize: '1.6rem', width: '25%' }}
            >Telefone</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row) => (
            <TableRow
                key={row.id}
                sx={{
                    fontSize: '1.6rem',
                    '&:last-child td, &:last-child th': { border: 0 }
                }}
            >
                <TableCell component="th" scope="row">
                    {row.nome}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.telefone}</TableCell>
                <TableCell align="left">
                    {
                        <div>
                            <button
                                onClick={() => handleEditContact(row)}
                            >{iconAdd}
                            </button>
                            <button
                                onClick={() => handleDeleteContact(row)}
                            >{iconDelete}
                            </button>
                        </div>
                    }
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
</TableContainer> */