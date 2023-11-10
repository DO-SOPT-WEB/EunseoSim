# 리액트에 대하여

## Q1. 컴포넌트는 어떤 기준과 방법으로 분리하는 것이 좋을까?

컴포넌트를 만들고 나누는 기준 중 가장 많이 선택하는 것은 `재사용성`과 `복잡성`이다. 반복되는 코드가 최소화되도록, 여러 곳에서 재사용되는 컴포넌트의 단위를 최대한 자세하게 정의하고, 디자인적인 배리에이션을 잘 고려하여 컴포넌트 조각을 용이하게 사용할 수 있도록 해야한다. 이를 위해서는 하나의 컴포넌트가 과도하게 복잡하거나 너무 많은 일을 처리하게 해서는 안된다. 재사용성을 높이기 위해서는, 컴포넌트 하나가 `일반적`이어야 하고, 이는 즉 많은 컴포넌트의 보편적인 속성을 만족시켜야 한다는 것을 의미한다.

## Q2. 좋은 상태 관리란 무엇일까?

아직 어떤게 “좋은 것” 인지 헷갈린다. 물론 정답은 없는 거지만, 기본적으로 과도한 props drilling을 피해야 하는데 동시에 전역 상태 관리 라이브러리는 꼭 필요할 때만 쓰라는 말들이 보인다. 그러나 3주차 과제를 통해 props drilling이 굉장히 직관성을 떨어뜨리고 유지보수를 어렵게 만든다는 걸 체감했기에 깊고 넓게 쓰이는 state에 대해서는 상태 관리 라이브러리를 충분히 활용해야하지 않을까 생각이 든다. 반면 얕은 depth 내에서만 쓰이는 state들도 존재할 것이고, 이 부분에서는 props drilling을 적절히 활용하는 것이 좋아보인다.

## Q3. 렌더링을 효과적으로 관리하는 방법은 무엇이 있을까?

useMemo, useCallback등을 사용하여 불필요한 렌더링을 줄이고 이미 계산된 값을 캐싱함으로서 효과적인 관리를 할 수 있다. 또한 큰 컴포넌트를 적절한 크기로, 그리고 적절한 의미와 기능에 맞게 분리함으로써 각 부분이 독립적으로 렌더링되도록 해야 한다. 즉, 필요 없는 중첩으로 인해 렌더링이 필요하지 않은 컴포넌트까지 함께 렌더링이 되는 상황을 막아야 한다. 컴포넌트가 중첩되는 과정에서 필요한 prop을 적절하게 정의하고 넘겨주는 것도 굉장히 중요한 부분이다.

## Q4. Props Drilling이란 무엇이고 이를 어떻게 해결할 수 있는가?

### Props Drilling이란?

React Component 트리의 한 부분에서 다른 부분으로 props를 이용해 데이터를 전달할 때 여러 컴포넌트들을 거치게 되는데, 오로지 props를 하위 컴포넌트로 전달하는 용도로만 거치게 되는 과정을 말한다.

### Props Drilling은 문제일까?

props drilling이 그 자체로 문제라고 할 수는 없다. 오히려 React component의 기본 속성을 이용해 데이터를 전달할 수 있는 가장 근본적인 방법일 것이다. 그러나 props 전달을 위해 거치는 컴포넌트가 서너개 정도라면 어느정도 관리가 가능하겠지만, 10개, 20개를 넘어간다면 어떤 prop이 어디서 왔고 어디서 변경되는지 추적하기가 굉장히 복잡해질 것이다.

## Props Drilling을 피하는 방법

### 전역 상태 관리 라이브러리 사용하기

과도한 Props Drilling을 피하기 위해서는 전역 상태 관리 라이브러리를 사용하는 방법이 있다. 전역 상태 관리 라이브러리에서 해결하고자 하는 것은 특정 상태를 컴포넌트 트리의 어디에서든지 읽어올 수 있게 하며 상태를 수정할 수 있도록 하는 것이다.추가로 렌더링과 메모리 사용을 최적화하는 메커니즘을 제공할 수 있다.

전역 상태 관리 라이브러리로는 Redux, Recoil, mobx, jotai 등이 있다.

### Context API 활용하기

Context API는 React 컴포넌트 트리 안에서 전역 상태를 공유할 수 있도록 만들어진 도구이다. 이미 존재하는 상태를 다른 컴포넌트들과 쉽게 공유할 수 있도록 한다.

### Props.children으로 합성(composition) 활용하기

합성이란 컴포넌트에서 다른 컴포넌트를 담는 것을 뜻한다. 모달과 같이 자식으로 어떤 엘리먼트가 들어올지 예상할 수 없는 컴포넌트에서는 children을 사용하여 자식 엘리먼트를 전달할 수 있다.

props.children 또한 props에 속하지만, 일반 props보다 children을 사용할 때 더 명확히 구성할 수 있는 경우도 있다.

```jsx
export default function App() {
  return (
    <div className="App">
      <FirstComponent content="Who needs me?" />
    </div>
  );
}

function FirstComponent({ content }) {
  return (
    <div>
      <h3>I am the first component</h3>;
      <SecondComponent content={content} />|
    </div>
  );
}

function SecondComponent({ content }) {
  return (
    <div>
      <h3>I am the second component</h3>;
      <ThirdComponent content={content} />
    </div>
  );

function ThirdComponent({ content }) {
  return (
    <div>
      <h3>I am the third component</h3>;
      <ComponentNeedingProps content={content} />
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}
```

위 코드에서는 특정 props를 필요로하는 컴포넌트에게 넘겨주기 위하여 `App > FirstComponent > SecondComponent > ThirdComponent > ComponentNeedingProps`와 같이 5단계를 거쳐 내려주고 있다.

```jsx
export default function App() {
  const content = 'Who needs me?';
  return (
    <div className="App">
      <FirstComponent>
        <SecondComponent>
          <ThirdComponent>
            <ComponentNeedingProps content={content} />
          </ThirdComponent>
        </SecondComponent>
      </FirstComponent>
    </div>
  );
}

function FirstComponent({ children }) {
  return (
    <div>
      <h3>I am the first component</h3>;{children}
    </div>
  );
}

function SecondComponent({ children }) {
  return (
    <div>
      <h3>I am the second component</h3>;{children}
    </div>
  );
}

function ThirdComponent({ children }) {
  return (
    <div>
      <h3>I am the third component</h3>
      {children}
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}
```

이를 children을 사용하여 리팩토링하면 위와같이 한결 더 추적이 원활한 형태로 개선된다. 물론 중첩이 많아져 이것도 좋은 방법은 아니지만, 어떤 상황에서는 children으로의 접근이 도움이 될 수도 있을 것 같다! 따라서 children을 활용하는 방법도 잘 익혀두어야겠다.
또한 React에서 children을 효과적으로 활용하기 위한 API를 지원하고 있다. [참고](https://www.daleseo.com/react-children/)React.Children API에서는 children prop에 대해 `map()`, `forEach()`, `count()`, `toArray()`, `only()` 이렇게 5개의 함수를 사용할 수 있다. 그러나 부모 컴포넌트가 자식 컴포넌트에 직접 접근하는 것은 특수한 상황을 제외하고는 모범 사례로 여겨지지는 않으니, 참고로 알아두도록 하자.
