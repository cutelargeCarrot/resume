import React from 'react'
import './index.less'
import classnames from 'classnames'

export interface Button {
    // 按钮大小
    size?:'middle' | 'big' | 'small'
    // 宽度
    width?:number
    // 自定义样式
    style?:React.CSSProperties
    //子组件
    children?:React.ReactNode | any
    // 禁止
    disabled?:boolean
    // 样式名
    className?:string
    // 点击事件
    onClick?:Function
    // 边框
    border?:boolean
}

export default function MyButton({ size='middle',style,width,children,disabled,className,onClick,border=true}:Button) {
    return (
        <div
            style={{...style,width:width}}
            className={className}
            styleName={classnames('es-button',{
                [`es-button-${size}`]:true,
                'es-button-disabled':disabled,
                'es-button-border':border
            })}
            onClick={()=>{
                onClick && onClick()
            }}
        >
            {children}
        </div>
    )
}
