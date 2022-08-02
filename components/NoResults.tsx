import React from 'react'
import { text } from 'stream/consumers';
import {Video} from '../types'


interface IProps {
  text: string;
}

const NoResults = ({text}: IProps) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults