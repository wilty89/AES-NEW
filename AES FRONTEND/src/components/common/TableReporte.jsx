import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function TableReporte({ rows, columns,onchildClick }) {
  const [id, setId] = useState("")
  console.log(id)

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
          //maxHeight: 550,
          height: screen.height < 1080 ? 550 : 890
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
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <>
                      <TableRow hover role="checkbox" tabIndex={-1} >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <><TableCell key={column.id} align={column.align}
                            //onClick={() => setId(row.LC)}
                              //onClick={() => {alert(row.LOCATION   + "" + row.LC);}}
                              //onClick={onchildClick(row)}
                            >
                              {value}
                            </TableCell>
                            </>
                          );
                        })}
                      </TableRow></>
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

export default TableReporte;
