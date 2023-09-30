import React from "react"
import { useLocation } from 'react-router-dom'

export default function ProjectPage() {
  const location = useLocation()
  const { from } = location.state
  return(
    <>
    <h1>Project page test</h1>
    <p>{from.title}</p>
    </>
  )
};
