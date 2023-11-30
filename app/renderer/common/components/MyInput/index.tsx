import React from 'react'
import './index.less'
import classnames from 'classnames'

const TYPE = {
    text:'text',
    textarea:'textarea'
}

export type SizeType = 'normal' | 'large'
export type type = 'text' | 'textarea' | ''


export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'> {
    // 自动获取焦点
    autoFocus?:boolean
    // 控件类型
    type?:type
    // 控件大小
    size?:SizeType
    // 是否禁用
    disabled?:boolean
    // 前置标签
    addonBefore?:React.ReactNode
    // 后置标签
    addonAfter?:React.ReactNode
    // 可以计数
    allowCount?: boolean
    // 点击清除图标删除内容
    allowClear?:boolean
    // textarea行数 default = 3
    rows?:number
    // 动态样式
    style?:React.CSSProperties
    // 输入框内容
    value?:string | number | undefined
    // 输入框占位符
    placeholder?:string
    // 输入框 id
    id?: string
    // 最大长度
    maxLength?:number
    // 是否透明背景
    bgTransparent?:boolean
    // 回调函数
    onChange?:(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

interface InputState {
    focus:boolean
    text: string | number
}

export default class MyInput extends React.PureComponent<InputProps,InputState> {       
    input : HTMLInputElement | HTMLTextAreaElement | undefined;
    constructor(props:InputProps) {
        super(props)
        this.state = {
            focus: false,
            text: props?.value || ''
        }
    }

    componentDidMount(): void {
        if(this.props.value) {
            this.setState({
                text:this.props.value
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<InputProps>, nextContext: any): void {
        if(nextProps.value){
            this.setState({
                text:nextProps.value
            })
        }
    }

    saveInput = (input:HTMLInputElement | HTMLTextAreaElement ) => {
        this.input = input
    }

    // change 事件
    actionChange(e:any){
        const target = this.input as any;
        const event = Object.create(e)

        // 清除按钮
        if(e.type == 'click') {
            target.value = ''
            event.target = target
            event.currentTarget = target
        }
        this.props.onChange && this.props.onChange(event)
    }

    focus = () => {
        this.input && this.input.focus()
    }
    blur = () => {
        this.input && this.input.blur();
      };
    
      onFocus = () => {
        this.setState({
          focus: true,
        });
      };
    
      onBlur = () => {
        this.setState({
          focus: false,
        });
      };
    
      onInput = (e: any) => {
        this.setState({ text: e.target.value });
        this.actionChange(e);
      };
    
      onClear = (e: any) => {
        this.setState({
          text: '',
        });
        this.actionChange(e);
      };
    
      renderBefore() {
        const { addonBefore } = this.props;
        return !!addonBefore && <div styleName="my-input-center">{addonBefore}</div>;
      }
    
      renderAfter() {
        const { addonAfter } = this.props;
        return !!addonAfter && <div styleName="my-input-center">{addonAfter}</div>;
      }
    
      renderClear() {
        const { allowClear } = this.props;
        return !!allowClear && this.state.text && <i styleName="my-input-clear" onClick={this.onClear} />;
      }
    
      renderInput() {
        const { placeholder, size = 'normal', maxLength, id, disabled, autoFocus } = this.props;
        return (
          <div
            styleName={classnames(`my-input-input`, {
              [`${size}`]: true,
            })}
          >
            <input
              {...{ placeholder, maxLength, id, disabled, autoFocus }}
              value={this.state.text}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onInput={this.onInput}
              ref={this.saveInput as any}
            />
            {this.renderClear()}
          </div>
        );
      }
    
      renderTextarea() {
        const { placeholder, maxLength = 1000, id, disabled, allowCount = true, autoFocus, rows } = this.props;
        const _rows = rows || 3;
        const text = this.state.text;
        return (
          <div styleName="my-input-textarea" style={{ height: 24 * _rows }}>
            <textarea
              {...{ placeholder, maxLength, id, disabled, autoFocus }}
              rows={_rows}
              value={text}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onInput={this.onInput}
              ref={this.saveInput as any}
            />
            {this.renderClear()}
            {allowCount && (
              <div styleName="my-input-textarea-footer">
                <span
                  styleName={classnames({
                    'max-length-text': !!maxLength && text && String(text).length >= maxLength,
                  })}
                >
                  {String(text).length}
                </span>
                {!!maxLength && (
                  <>
                    <span>/</span>
                    <span>{maxLength}</span>
                  </>
                )}
              </div>
            )}
          </div>
        );
      }
    
      render() {
        const { bgTransparent = false, style, type, allowClear } = this.props;
        return (
          <div
            style={style}
            styleName={classnames('my-input', {
              normal: !bgTransparent,
              focus: this.state.focus,
              'allow-clear': allowClear,
            })}
          >
            {this.renderBefore()}
            {TYPE.textarea === type ? this.renderTextarea() : this.renderInput()}
            {this.renderAfter()}
          </div>
        );
      }
}