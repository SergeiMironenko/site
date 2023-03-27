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
        this.handleChange = this.handleChange.bind(this);
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
        }
    }

    handleChange() {
        this.setState(prevState => ({
            isOnlyNormatives: !prevState.isOnlyNormatives
        }))
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
                <Checkbox onChange={this.handleChange} />
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