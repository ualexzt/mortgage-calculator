import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { IBankItem } from '../types/bank.type';
import { useNavigate } from 'react-router-dom';

interface BankItemProps {
  bank: IBankItem;
}

const BankItem = ({ bank }: BankItemProps) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {bank.name ? bank.name[0].toUpperCase() : 'B'}
          </Avatar>
        }
        title={bank.name}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://worldscholarshipforum.com/wealth/wp-content/uploads/sites/4/2021/09/How-Do-banks-Make-Money.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {bank.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/bank/${bank.id}`)}>More detail</Button>
      </CardActions>
    </Card>
  );
};

export default BankItem;
