import React, { Component } from 'react';
import styles from './styles';
import { Entity } from 'draft-js';

export default (stickers) => {
  class Sticker extends Component {

    remove: Function = (event) => {
      // Note: important to avoid a content edit change
      event.preventDefault();
      event.stopPropagation();

      this.props.blockProps.onRemove(this.props.block.getKey());
    };

    render() {
      const { block } = this.props;
      const data = Entity.get(block.getEntityAt(0)).getData();
      return (
        <figure style={ styles.root } contentEditable={ false } data-offset-key={ `${block.get('key')}-0-0` }>
          <img height={100} src={ stickers.getIn([data.id, 'url']) } />
          <button style={ styles.removeButton } onClick={this.remove}>
            ✕
          </button>
        </figure>
      );
    }
  }
  return Sticker;
};
