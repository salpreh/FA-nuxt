import { mount } from '@vue/test-utils'
import Banner from '@/components/Banner'

describe('Banner component', () => {
  const SLOT_CONTENT = '<p> Test content </p>'
  const wrapper = mount(Banner, {
    slots: {
      header: SLOT_CONTENT
    }
  })

  test('should render slot', () => {
    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })
})
