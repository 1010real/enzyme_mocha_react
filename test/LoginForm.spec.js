import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import LoginForm from '../src/LoginForm';
import EmailInput from '../src/EmailInput';
import PasswordInput from '../src/PasswordInput';

// アサーションにchai-enzymeを使用するように設定
chai.use(chaiEnzyme());

// describeにはどのコンポーネントに対してのテストを書いているかを指定
describe('EmailInputのテスト', () => {

  // itにはテストの内容を書く
  it('propが渡されたときにvalueにセットされること', () => {
    const wrapper = shallow(<EmailInput />);

    // propsを渡す
    wrapper.setProps({ 'value': 'foo@example.com' });

    console.log(wrapper.debug());

    // valueにセットされているか確認
    expect(wrapper.find('input')).to.have.value('foo@example.com');
  });

  it('メールアドレスが入力されたときにonChangeイベントが発火すること', () => {
    // onChangeメソッドが呼ばれたときの入出力（引数の値や戻り値、呼ばれた回数など）を監視する
    const onChange = spy();

    // テスト対象のコンポーネントのみをレンダリング
    const wrapper = shallow(<EmailInput onChange={onChange} />);

    // 入力イベントを擬似的に再現
    wrapper.find('input').simulate(
      'change', {
        target: {
          value: 'x'
        }
      }
    );

    // onChangeメソッドが1回呼ばれているかを確認
    expect(onChange.calledOnce).to.equal(true);
  });
});
