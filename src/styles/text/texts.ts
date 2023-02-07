import styled from 'styled-components';
import { constants } from '../../constants';
import { TextProps } from './text.types';

export const Text = styled.h1<TextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || constants.typography.size.regular};
  font-weight: ${(props) => props.fontWeight || constants.typography.weight.regular};
  font-family: ${(props) => props.fontFamily || constants.typography.font.primary};
  font-style: ${(props) => props.fontStyle || 'normal'};

  line-height: ${(props) => props.lineHeight || constants.typography.lineHeight.regular};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};

  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
  text-indent: ${(props) => props.textIndent};
  word-spacing: ${(props) => props.wordSpacing || 'normal'};
  vertical-align: ${(props) => props.verticalAlign || 'baseline'};
  white-space: ${(props) => props.whiteSpace || 'normal'};
  word-break: ${(props) => props.wordBreak || 'normal'};

  writing-mode: ${(props) => props.writingMode};
  cursor: ${(props) => props.cursor || 'default'};
  opacity: ${(props) => props.opacity};
  aspect-ratio: ${(props) => props.aspectRatio};

  webkit-line-clamp: ${(props) => props.webkitLineClamp || '2'};
  webkit-box-orient: ${(props) => props.webkitBoxOrient || 'vertical'};
  webkit-box-direction: ${(props) => props.webkitBoxDirection || 'normal'};

  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-inline: ${(props) => props.marginInline};
  margin-inline-start: ${(props) => props.marginInlineStart};

  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-inline: ${(props) => props.paddingInline};
  padding-inline-start: ${(props) => props.paddingInlineStart};
`;
