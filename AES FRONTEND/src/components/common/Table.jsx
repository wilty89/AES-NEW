import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Tables({ handleClickOpen, rows, columns, onchildClick, }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "#eee" }}>
        <TableContainer sx={{
          maxHeight: 1000,
          minHeight:700,
          /////height: '100%',
          //height: screen.height < 1080 ? 550 : 1050
        }}>
          <Table sx={{}} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, index) => {
                  return (
                    <>
                      <StyledTableRow hover role="checkbox" tabIndex={-1} key={index} >
                        {columns?.map((column) => {
                          const value = row[column.id];
                          const fecha = row.DATE_SENT
                          //console.log(fecha.toGMTString());
                          const valor = row.ed_tipo;
                          const colores =
                           valor === 1
                                ? "error"
                                : valor === 3
                                  ? "warning"
                                  : valor === 4
                                    ? "secondary"
                                    : "primary";

                          const selecion = 
                          valor === 4
                            ? "Abuso de Confianza"
                            : valor === 1
                              ? "Robado"
                              : valor === 3
                                ? "Rastreo"
                                : "Visto"
                          return (
                            <><TableCell key={column.id} align={column.align}
                              onClick={() => { onchildClick(row); handleClickOpen(); }}
                            >
                              {
                                column.format
                                  ? <Chip label={column.format(selecion)} color={colores} />
                                  : column.formatFecha
                                    ? <Chip label={column.formatFecha(fecha)} />
                                    : value
                              }
                              
                            </TableCell>
                            </>
                          );
                        })} 
                      </StyledTableRow></>
                  );
                 
                })}
              <TableRow>
                <TableCell>
                  <b>Cantidad Total :</b> {rows.length}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          cantidad={rows.length}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Tables;
