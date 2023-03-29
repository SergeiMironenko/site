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
import Select from '@mui/material/Select';
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

function RenderTableRow(props) {
  return (
    <TableRow>
      <RenderTableCell value={props.value['name']} />
      <RenderTableCell hide={props.hide} value={props.value['gender']} />
      <RenderTableCell edit hide={props.hide} value={props.value['dir']} />
      <RenderTableCell edit hide={props.hide} value={props.value['teacher']} />
      <RenderTableCell edit value={props.value['jump']} />
      <RenderTableCell edit value={props.value['up']} />
      <RenderTableCell edit value={props.value['pushup']} />
      <RenderTableCell edit value={props.value['flex']} />
      <RenderTableCell edit value={props.value['run']} />
      <RenderTableCell edit value={props.value['height']} />
      <RenderTableCell edit value={props.value['weight']} />
      <RenderTableCell value={props.value['I']} />
    </TableRow>);
}

function RenderTableCell(props) {
  if (props.hide) return null;
  var elem = "";
  if (props.edit)
    elem = <TextField
      defaultValue={props.value}
      variant="standard"
      multiline
    />;
  else
    elem = props.value;
  return <TableCell
    className={props.className}
    rowSpan={props.rowSpan}
    colSpan={props.colSpan}
    style={props.style}
    autoWidth
  >
    {elem}
  </TableCell>;
}

class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.isOnlyNormativesChange = this.isOnlyNormativesChange.bind(this);
    this.state = {
      isOnlyNormatives: false,
      listItems: '',
      year: 2022,
      semester: "Весенний",
      faculty: "ФПМИ",
      course: 1,
      group: "ПМ-91",
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

  }

  render() {
    const tableRows = Array(15).fill(0).map((item, i) => ({
      name: ("Student кншвкнвквнв 2345678923457" + i),
      gender: i % 2 ? "M" : "Ж",
      dir: i % 3 === 0 ? "Легкая атлетика цвуапро 234578увакпрол" : "Н/Д",
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

    const years = [2023, 2022]
    const semesters = ["Осенний", "Весенний"]
    const faculties = ["ФПМИ", "ФЛА", "АВТФ"];
    const courses = [1, 2, 3, 4]
    const groups = ["ПМ-91", "ПМ-72"];

    return (
      <Paper style={{
        display: 'flex',
        height: "100vh",
        flexDirection: "column"
      }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >

          {/* Только нормативы */}
          <FormControlLabel
            control={<Checkbox onChange={this.isOnlyNormativesChange} />}
            label="Показывать только нормативы"
          />

          {/* Год */}
          <FormControl>
            <InputLabel>Год</InputLabel>
            <Select
              value={this.state.year}
              label="Год"
              onChange={event => this.yearChange(event.target.value)}
              size="small"
            >
              {years.map((year) => <MenuItem value={year}>{year}</MenuItem>)}
            </Select>
          </FormControl>

          {/* Семестр */}
          <FormControl>
            <InputLabel>Семестр</InputLabel>
            <Select
              value={this.state.semester}
              label="Семестр"
              onChange={event => this.semesterChange(event.target.value)}
              size="small"
            >
              {semesters.map((semester) => <MenuItem value={semester}>{semester}</MenuItem>)}
            </Select>
          </FormControl>

          {/* Факультет */}
          <Autocomplete
            disablePortal
            options={faculties}
            style={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Факультет" />}
            onChange={event => this.facultyChange(event.target.value)}
            size="small"
          />

          {/* Курс */}
          <FormControl>
            <InputLabel>Курс</InputLabel>
            <Select
              value={this.state.course}
              label="Курс"
              onChange={event => this.courseChange(event.target.value)}
              size="small"
            >
              {courses.map((course) => <MenuItem value={course}>{course}</MenuItem>)}
            </Select>
          </FormControl>

          {/* Группы */}
          <Autocomplete
            disablePortal
            options={groups}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} label="Группа" />}
            onChange={event => this.groupChange(event.target.value)}
            size="small"
          />
        </Stack>

        {/* Таблица */}
        <TableContainer
          style={{ flexGrow: 1 }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <RenderTableCell style={{ minWidth: 150 }} hide={false} className="tableCellRows" rowSpan={2} value="Студент" />
                <RenderTableCell style={{ minWidth: 150 }} hide={this.state.isOnlyNormatives} className="tableCellRows" rowSpan={2} value="Пол" />
                <RenderTableCell style={{ minWidth: 150 }} hide={this.state.isOnlyNormatives} className="tableCellRows" rowSpan={2} value="Отделение" />
                <RenderTableCell style={{ minWidth: 150 }} hide={this.state.isOnlyNormatives} className="tableCellRows" rowSpan={2} value="Преподаватель" />
                <RenderTableCell style={{ minWidth: 150 }} hide={false} colSpan={5} value="Нормативы" />
                <RenderTableCell style={{ minWidth: 150 }} hide={false} colSpan={3} value="Измерения" />
              </TableRow>
              <TableRow>
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="Прыжок в длину" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="Подъем туловища" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="Подтягивание" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="Гибкость" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="Бег" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="Р" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="В" />
                <RenderTableCell style={{ top: 37, minWidth: 150 }} value="И" />
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((listItem, i) =>
                <RenderTableRow hide={this.state.isOnlyNormatives} key={i} value={listItem} />)}
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