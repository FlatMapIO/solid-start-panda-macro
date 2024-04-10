import { Title } from "@solidjs/meta"
import { css } from '~/styled-system/css'

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <button class={css({
        fontSize:'xx-large',
        fontWeight:'bold',
        bg:'gray',
        _hover: {
          bg:'red',
        }
      })}>
        Click me!
      </button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
