import './App.css'
import { Component } from 'react';

class Content extends Component {

    handleRowClick = (e) => {
        e.currentTarget.style.backgroundColor = this.getRandomColor();
        e.currentTarget.style.color = this.getRandomColor();
    };

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="2"><h3>Освіта</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr onClick={this.handleRowClick}>
                        <td><h3>Школа</h3></td>
                        <td>ЗСШФМП №12 м. Чернігів</td>
                    </tr>
                    <tr onClick={this.handleRowClick}>
                        <td><h3>Університет</h3></td>
                        <td>КПІ ім. Ігоря Сікорського</td>
                    </tr>
                    </tbody>
                </table>
                <div className="about">
                    <div className="about-1">
                        <h3>Мої Хобі</h3>
                        <ul>
                            <li>Читання книг різних жанрів</li>
                            <li>Зайняття спортом, зокрема бігом і плаванням</li>
                            <li>Стрільба з пістолету</li>
                        </ul>
                    </div>
                    <div className="about-2">
                    <h3>Улюблені фільми</h3>
                        <ol>
                            <li>Валерій і місто тисячі планет</li>
                            <li>Кінгсман: Таємна служба</li>
                            <li>Мачо і ботан</li>
                        </ol>
                    </div>
                </div>
                <div className="city-block">
                    <div className="city-block-img">
                        <a href="https://www.berlin.de/en/" target="_blank">
                            <img src={returnImage()} alt="berlin"/>
                        </a>
                    </div>
                    <div className="city-block-info">
                <span className="city">
                    Берлін — столиця та найбільше місто Німеччини. Розташований на сході країни, в межах колишньої НДР. Населення міста близько 3 млн. осіб. Одне з найкрасивіших міст Німеччини і Європи. Має найбільш продуману і зручну систему метро в Європі. Розташоване в межах 100 км. до польського кордону. Не має виходу до моря. Розташовані два аеропорти: Теґель і Шонесфельд.
                </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;


























































function returnImage(){
}