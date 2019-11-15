import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Checkbox } from 'antd';

const FormDecorator = (props) => {
    const getFieldDecorator = () => {
        let field, options
        switch (props.type) {
            case 'checkbox':
                options = {
                  valuePropName: 'checked',
                  initialValue: true,
                }

                field = (
                    <Checkbox>{ props.placeholder }</Checkbox>
                )
                break;
            default:
                field = (
                    <Input
                      prefix={ props.prefix }
                      type={ props.type }
                      placeholder={ props.placeholder }
                    />
                )
        }

        return props.init(props.name, { ...options, rules: props.rules })(field)
    }

    return (
        <Form.Item className={props.className} label={ props.label }>
          { getFieldDecorator() }
          { props.children }
        </Form.Item>
    )
}

FormDecorator.propTypes = {
    init: PropTypes.func.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    rules: PropTypes.array,
    placeholder: PropTypes.string
}

FormDecorator.defaultProps = {
    type: 'text',
    rules: []
}

export default FormDecorator
