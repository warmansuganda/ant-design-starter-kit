import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { Menu, Dropdown, Icon } from 'antd'

const SelectLanguage = (props) => {
    const selectedLang = 'en-US'
    const changeLang = (e) => { console.log(e) }
    const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR']

    const languageLabels = {
        'zh-CN': '简体中文',
        'zh-TW': '繁体中文',
        'en-US': 'English',
        'pt-BR': 'Português',
    }

    const languageIcons = {
        'zh-CN': '🇨🇳',
        'zh-TW': '🇭🇰',
        'en-US': '🇺🇸',
        'pt-BR': '🇧🇷',
    }

    const langMenu = (
        <Menu selectedKeys={[selectedLang]} onClick={changeLang}>
          {locales.map(locale => (
            <Menu.Item key={locale}>
              <span role="img" aria-label={languageLabels[locale]}>
                {languageIcons[locale]}
              </span>{' '}
              {languageLabels[locale]}
            </Menu.Item>
          ))}
        </Menu>
    );

    return (
        <Dropdown overlay={langMenu} placement="bottomRight">
            <span className="menu">
                <Icon type="global" title="Select Language" />
            </span>
        </Dropdown>
    )
}

SelectLanguage.propTypes = {
    lang: PropTypes.string
}

function mapStateToProps(state) {
  return {
    lang: state.app.lang
  }
}

export default connect(mapStateToProps)(SelectLanguage)
