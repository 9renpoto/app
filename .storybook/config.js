import { configure } from '@storybook/react'

configure(require.context('../', true, /story.tsx$/), module)
