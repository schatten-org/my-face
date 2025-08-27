import { Fragment } from 'react/jsx-runtime'
import XpWindow from '@/components/XpWindow'

const HelloComponent = () => {
  return (
    <Fragment>
      <XpWindow id="ie" title="Internet Explorer" initialPos={{ x: 80, y: 80 }}>
        <p>Yosh! Ini jendela pertama, Kirito-kun~</p>
      </XpWindow>

      <XpWindow
        id="my-computer"
        title="My Computer"
        initialPos={{ x: 320, y: 140 }}
      >
        <p>Drag aku juga. Klik tab di taskbar untuk fokus/minimize.</p>
      </XpWindow>
    </Fragment>
  )
}

export default HelloComponent
