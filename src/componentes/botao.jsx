import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
    IconButton,
} from '@mui/material';

function Botao() {
    const [abrir, setAbrir] = useState(false);

    // Estados dos campos
    const [Nome, setNome] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [Segmento, setSegmento] = useState('');
    const [CEP, setCEP] = useState('');
    const [Endereco, setEndereco] = useState('');
    const [Numero, setNumero] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Estado, setEstado] = useState('');

    // Função para fechar o dialog
    const onClose = () => setAbrir(false);

        const handleSave = async () => {
            try {
            const response = await fetch("http://localhost:4000/create", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome: Nome, cnpj: CNPJ, endereco: Endereco, numero: Numero, bairro: Bairro, cidade: Cidade, estado: Estado}), // Nome vem do seu input
            });
        
            const result = await response.json();
            console.log(result.msg); // "Usuário criado com sucesso."
        
            onClose(); // fecha modal ou form
            } catch (error) {
            console.error("Erro ao salvar usuário:", error);
            }
        };
        

    return (
        <>
            <div>
                <Button style={{color: 'black'}} onClick={() => setAbrir(true)}>Cadastrar</Button>
            </div>
            <Dialog open={abrir} onClose={() => setAbrir(false)} fullWidth maxWidth="sm" > {/* Para nao dar bug visual */}
                <DialogTitle>
                    Cadastro de Clientes
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        {/* <CloseIcon /> */}
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Nome"
                            value={Nome}
                            onChange={(e) => setNome(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="CNPJ"
                            value={CNPJ}
                            onChange={(e) => setCNPJ(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Segmento da Empresa"
                            value={Segmento}
                            onChange={(e) => setSegmento(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="CEP"
                            value={CEP}
                            onChange={(e) => setCEP(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Endereço"
                            value={Endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Número"
                            value={Numero}
                            onChange={(e) => setNumero(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Bairro"
                            value={Bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Cidade"
                            value={Cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Estado"
                            value={Estado}
                            onChange={(e) => setEstado(e.target.value)}
                            fullWidth
                        />
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" color="success" onClick={handleSave}>
                        SALVAR
                    </Button>
                    <Button variant="outlined" color="error" onClick={onClose}>
                        CANCELAR
                    </Button>
                </DialogActions>
            </Dialog>
        </>


    )

}
export default Botao
