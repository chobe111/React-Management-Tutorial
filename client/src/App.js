import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles= theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,//여백을 3의 가중치 만큼줌.
    overflowX: "auto"//x축으로 오버플로우가 발생할수 있게해줌.
  },
  table: {
    minWidth: 1080//화면의 크기가 줄어들었을때도 전체의 1080픽셀만큼은 테이블의 크기가 자리잡아 가로 스크롤 바가 생기가됨.
  }
})
const customers=[
 {
  'id':1,
  'image' : "https://placeimg.com/64/64/1",
  'name':'조명기',
  'birthday':'980719',
  'gender':'남자',
  'job':'대학생'
  
},
{
  'id':2,
  'image' : "https://placeimg.com/64/64/2",
  'name':'파커',
  'birthday':'150819',
  'gender':'남자',
  'job':'강아지'  
},
{
  'id':3,
  'image' : "https://placeimg.com/64/64/3",
  'name':'유금석',
  'birthday':'980009',
  'gender':'남자',
  'job':'군인'  
}

]


class App extends Component {//웹문서에서 보여지게 될 최소단위
  render() {
    const { classes }=this.props;
    return (
      <div>
     <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        customers.map(c=>{
          return <Customer  key={c.id}  id={c.id}  image={c.image} name={c.name}  birthday={c.birthday} gender={c.gender} job={c.job}
          />
        })
      }
        </TableBody>

        </Table> 
        </Paper>  
      
      </div>
    );
  }
}

export default withStyles(styles)(App);
