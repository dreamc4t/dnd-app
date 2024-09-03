import { MouseEventHandler } from 'react'
import { CustomIcon } from './CustomIcon'
import { paths } from './paths'

type IconProps = {
  size?: number
  color?: string
  title?: string
  onClick?: MouseEventHandler
  className?: string
}

const createIcon = (path: string, displayName: string) => {
  const IconComponent = (props: IconProps) => {
    return <CustomIcon path={path} {...props} />
  }

  IconComponent.displayName = displayName
  return IconComponent
}
const iconDefinitions = {
  UpIcon: paths.up,
  DownIcon: paths.down,
  GridSmallIcon: paths.gridSmall,
  GridBigIcon: paths.gridBig,
  InfoIcon: paths.info,
  ExternalLinkIcon: paths.externalLink,
}

const icons = Object.fromEntries(
  Object.entries(iconDefinitions).map(([name, path]) => [name, createIcon(path, name)]),
)

export { icons }
