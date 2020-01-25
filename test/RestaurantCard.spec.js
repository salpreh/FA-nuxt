import { mount } from '@vue/test-utils'
import RestaurantCard from '@/components/RestaurantCard'

describe('RestaurantCard', () => {
  const props = {
    id: 0,
    title: 'Tandoor',
    subtitle: 'Restaurante de comida ',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse, sodales ultrices vulputate libero imperdiet litora malesuada rutrum, erat felis fringilla conubia risus massa leo. Eget magna cursus curabitur montes conubia parturient, maecenas netus mollis rutrum fames placerat, ligula odio iaculis sed orci penatibus, massa non tincidunt lacus laoreet. Interdum convallis dictum lectus fringilla elementum malesuada a quis viverra, nibh ultricies morbi ut congue dictumst dapibus feugiat netus gravida, nam pellentesque massa maecenas himenaeos fermentum risus per.',
    infoUrl: 'tandoor-barcelona',
    category: 'oriental',
    city: 'Barcelona',
    address: 'Carrer d\'Aragó, 8',
    likes: 20,
    image: 'https://netlify.pedrojimenez.info/photosCursoOpenWebinar/restaurant01.jpg'
  }

  const wrapper = mount(RestaurantCard, { propsData: props })
  test('is mounted', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('is rendering correctly', () => {
    expect(wrapper.props().title).toBe('Tandoor')
    expect(wrapper.props().infoUrl).toBe('tandoor-barcelona')
    expect(wrapper.props().category).toBe('oriental')
  })
})
