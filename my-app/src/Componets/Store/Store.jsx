import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { } from "../../Redux/Actions";
import { Container, Row, Col } from "react-bootstrap";
import "./Store.css"

export default function Store() {
    const dispatch = useDispatch()


    return (
      <div className="divStoreContainer">
        <h1>Store</h1>
      </div>
    )
}

