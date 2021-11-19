import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="grid footer">
                <div className="grid wide footer__wide">
                    <div className="row footer__row">
                        <div className="col l-3 m-4">
                            <h3 className="footer__name">
                                Phim lẻ
                            </h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Phim lẻ 2021
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Phim lẻ 2020
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Phim lẻ 2019
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Phim lẻ 2018
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Phim lẻ 2017
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-4">
                            <h3 className="footer__name">
                                Thể loại
                            </h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Hành động
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Viễn tưởng
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Võ thuật
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Tình cảm
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Phiêu lưu
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-4">
                            <h3 className="footer__name">
                                Liên hệ
                            </h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <span href className="footer__item-link">
                                        Võ Nguyễn Thái an
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <span href className="footer__item-linkk footer__item-link">
                                        <i className="fas fa-envelope-square" />
                                        anvo8222@gmail.com
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <a href="https://www.facebook.com/thaian02012k/" className="footer__item-link">
                                        <i className="fab fa-facebook" />
                                        Nguyễn An
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <span href className="footer__item-link">
                                        0387967435
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
