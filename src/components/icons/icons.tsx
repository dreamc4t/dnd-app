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
  AddIcon: paths.add,
  CheckIcon: paths.check,
  ChevronDown: paths.chevronDown,
  ChevronLeft: paths.chevronLeft,
  ChevronRight: paths.chevronRight,
  ChevronUp: paths.chevronUp,
  CopyIcon: paths.copy,
  EditIcon: paths.edit,
  ExternalLinkIcon: paths.externalLink,
  GridBigIcon: paths.gridBig,
  GridSmallIcon: paths.gridSmall,
  InfoIcon: paths.info,
  ProfileIcon: paths.profile,
  RefreshIcon: paths.refresh,
  SearchIcon: paths.search,
  TrashcanIcon: paths.trashcan,
}

const icons = Object.fromEntries(
  Object.entries(iconDefinitions).map(([name, path]) => [name, createIcon(path, name)]),
)

export { icons }
