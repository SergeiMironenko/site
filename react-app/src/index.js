import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./index.css";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Welcome />
  }
  return <AuthorizationFailed />
}

function AuthorizationFailed() {
  return <div>Нужна авторизация</div>
}

function Welcome() {
  return <div><Screen1 /></div>
}

function TableRowFun(props) {
  return (
    <TableRow>
      <TableCellFun hide={false} value={props.value['name']} />
      <TableCellFun hide={props.hide} value={props.value['gender']} />
      <TableCellFun hide={props.hide} value={props.value['dir']} />
      <TableCellFun hide={props.hide} value={props.value['teacher']} />
      <TableCellFun hide={false} value={props.value['jump']} />
      <TableCellFun hide={false} value={props.value['up']} />
      <TableCellFun hide={false} value={props.value['pushup']} />
      <TableCellFun hide={false} value={props.value['flex']} />
      <TableCellFun hide={false} value={props.value['run']} />
      <TableCellFun hide={false} value={props.value['height']} />
      <TableCellFun hide={false} value={props.value['weight']} />
      <TableCellFun hide={false} value={props.value['I']} />
    </TableRow>);
}

function TableCellFun(props) {
  if (props.hide) return null;
  return <TableCell
    className={props.className}
    rowSpan={props.rowSpan}
    colSpan={props.colSpan}
  >{props.value}</TableCell>;

}

class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.isOnlyNormativesChange = this.isOnlyNormativesChange.bind(this);
    this.state = {
      isOnlyNormatives: false,
      listItems: '',
      list: Array(15).fill(0).map((item, i) => ({
        name: ("Student " + i),
        gender: i % 2 ? "M" : "Ж",
        dir: i % 3 === 0 ? "Легкая атлетика" : "Н/Д",
        teacher: i % 4 === 0 ? "TheBest" : "Н/Д",
        jump: 0,
        up: 0,
        pushup: 0,
        flex: 0,
        run: 0,
        height: 0,
        weight: 0,
        I: "00.00",
      })),
      year: 2022,
      semester: "Весенний",
      faculty: "ФПМИ",
      faculties: [
        "ФПМИ",
        "ФЛА",
        "АВТФ"
      ],
      course: 1,
      group: "ПМ-91",
      groups: [
        "ПМ-91",
        "ПМ-72"
      ],
    }
  }

  isOnlyNormativesChange() {
    this.setState(prevState => ({
      isOnlyNormatives: !prevState.isOnlyNormatives
    }))
  }

  yearChange(value) {
    this.setState({ year: value })
  }

  semesterChange(value) {
    this.setState({ semester: value })
  }

  facultyChange(value) {
    this.setState({ faculty: value })
  }

  courseChange(value) {
    this.setState({ course: value })
  }

  groupChange(value) {
    this.setState({ group: value })
  }

  componentDidMount() {
    const list = Array(15).fill(0).map((item, i) => ({
      name: ("Student " + i),
      gender: i % 2 ? "M" : "Ж",
      dir: i % 3 === 0 ? "Легкая атлетика" : "Н/Д",
      teacher: i % 4 === 0 ? "TheBest" : "Н/Д",
      jump: 0,
      up: 0,
      pushup: 0,
      flex: 0,
      run: 0,
      height: 0,
      weight: 0,
      I: "00.00",
    }));

    const listItems = list.map((listItem, i) =>
      <TableRowFun hide={this.state.isOnlyNormatives} key={i} value={listItem} />);

    this.setState({
      listItems: listItems
    })
  }

  render() {
    return (
      <Paper>
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControlLabel
            control={<Checkbox onChange={this.isOnlyNormativesChange} />}
            label="Показывать только нормативы"
          />
          <FormControl>
            <InputLabel>Год</InputLabel>
            <Select
              value={this.state.year}
              label="Год"
              onChange={event => this.yearChange(event.target.value)}
              size="small"
            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Семестр</InputLabel>
            <Select
              value={this.state.semester}
              label="Семестр"
              onChange={event => this.semesterChange(event.target.value)}
              size="small"
            >
              <MenuItem value="Осенний">Осенний</MenuItem>
              <MenuItem value="Весенний">Весенний</MenuItem>
            </Select>
          </FormControl>
          <Autocomplete
            disablePortal
            options={this.state.faculties}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Факультет" />}
            onChange={event => this.facultyChange(event.target.value)}
            size="small"
          />
          <FormControl>
            <InputLabel>Курс</InputLabel>
            <Select
              value={this.state.course}
              label="Курс"
              onChange={event => this.courseChange(event.target.value)}
              size="small"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          <Autocomplete
            disablePortal
            options={this.state.groups}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Группа" />}
            onChange={event => this.groupChange(event.target.value)}
            size="small"
          />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCellFun hide={false} className="tableCellRows" rowSpan={2} value="Студент" />
                <TableCellFun hide={this.state.isOnlyNormatives} className="tableCellRows" rowSpan={2} value="Пол" />
                <TableCellFun hide={this.state.isOnlyNormatives} className="tableCellRows" rowSpan={2} value="Отделение" />
                <TableCellFun hide={this.state.isOnlyNormatives} className="tableCellRows" rowSpan={2} value="Преподаватель" />
                <TableCellFun hide={false} colSpan={5} value="Нормативы" />
                <TableCellFun hide={false} colSpan={3} value="Измерения" />
              </TableRow>
              <TableRow>
                <TableCellFun value="Прыжок в длину" />
                <TableCellFun value="Подъем туловища" />
                <TableCellFun value="Подтягивание" />
                <TableCellFun value="Гибкость" />
                <TableCellFun value="Бег" />
                <TableCellFun value="Р" />
                <TableCellFun value="В" />
                <TableCellFun value="И" />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.list.map((listItem, i) =>
                <TableRowFun hide={this.state.isOnlyNormatives} key={i} value={listItem} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

const element = <Greeting isLoggedIn={true} />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);