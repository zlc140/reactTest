import React,{Component} from 'react'
import notePageImage from '../assets/404.jpg'
import classes from './common.scss'


export default class Main extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="notPage">
                <h3>Page not found !</h3>
                <img src={notePageImage} />
            </div>
        )
    }
}