import axios from 'axios'
import { Modal } from 'antd';

const api = {
    form: () => {
        Modal.confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            okButtonProps: {
              disabled: true,
            },
            cancelText: 'No',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
        })
    }
}

export default api
