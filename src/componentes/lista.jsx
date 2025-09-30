import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from '@mui/material/Card';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from 'react';
import "../styles/style.css"

export default function Lista () {
	const [list,setList] = useState([]);

	const [dataEdit, setDataEdit] = useState(null);

	const onEditOpen = () => {
	console.log("abrindo modal de edição");
	};

	const handleRemove = async (id) => {
		try {
			const response = await fetch(`http://localhost:4000/delete/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
	
			if (!response.ok) {
				alert("Erro ao remover usuário");
				return;
			}
	
			console.log("Cliente removido:", id);
	
			// Atualiza o estado local removendo da lista
			setList((prevList) => prevList.filter((item) => item.id !== id));
		} catch (err) {
			console.error(err);
		}
	};
	

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:4000/list", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					}
				})
				const data = await response.json();
				console.log(data);
				debugger
				if (!data) {
					console.log("A api não retornou nada!");
					alert("A api esta com erro");
					return
				}
				setList(data);
			}
			catch (err) {
				console.error(err);
			}
		}
		fetchData ();
	},[]) 

	return (
		<Card style={{ width: "100%", maxHeight: 400, overflow: "auto" }}>
			<Box>
				<TableContainer component={Paper}>
					<Table>
					<TableHead>
						<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Nome</TableCell>
						<TableCell>CNPJ</TableCell>
						<TableCell>Endereço</TableCell>
						<TableCell>Número</TableCell>
						<TableCell>Bairro</TableCell>
						<TableCell>Cidade</TableCell>
						<TableCell>Estado</TableCell>
						<TableCell>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list.map((cliente) => (
						<TableRow
							key={cliente.id}
							hover
							sx={{ cursor: "pointer" }}
						>
							<TableCell>{cliente.id}</TableCell>
							<TableCell>{cliente.nome}</TableCell>
							<TableCell>{cliente.cnpj}</TableCell>
							<TableCell>{cliente.endereco}</TableCell>
							<TableCell>{cliente.numero}</TableCell>
							<TableCell>{cliente.bairro}</TableCell>
							<TableCell>{cliente.cidade}</TableCell>
							<TableCell>{cliente.estado}</TableCell>
							<TableCell>
							<Box sx={{ display: "flex", gap: 1 }}>
								<EditIcon
								fontSize="small"
								onClick={() => {
									setDataEdit({ ...cliente });
									onEditOpen();
								}}
								sx={{ cursor: "pointer" }}
								/>
								<DeleteIcon
								fontSize="small"
								onClick={() => handleRemove(cliente.id)}
								sx={{ cursor: "pointer" }}
								/>
							</Box>
							</TableCell>
						</TableRow>
						))}
					</TableBody>
					</Table>
				</TableContainer>
				</Box>
		</Card>
	)
}
