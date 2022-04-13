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

interface BankItemProps {
  bank: IBankItem;
}

const BankItem = ({ bank }: BankItemProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={bank.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://worldscholarshipforum.com/wealth/wp-content/uploads/sites/4/2021/09/How-Do-banks-Make-Money.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button>More detail</Button>
      </CardActions>
    </Card>
  );
};

export default BankItem;
