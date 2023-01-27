/* Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
} */

/**
 * 할일
 * @typedef {Object} Todo
 * @property {string} id - 할일 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]|undefined} tags - 태그들
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 *
 * @function createTodo
 * @param {string} content
 * @param {string} category
 * @param {string[]|undefined} tags
 */
const creatTodo = (content, category, tags) => {};

/**
 * 모든 할 일을 조회할 수 있다.
 *
 * @function readAllTodos
 */
const readAllTodos = () => {};

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 *
 * @function readTodo
 * @param {string} id
 */
const readTodo = (id) => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 *
 * @function updateTodo
 * @param {Todo} todoData
 */
const updateTodo = (todoData) => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 *
 * @function deleteTodo
 * @param {string} id
 */
const deleteTodo = (id) => {};

/**
 * 모든 할 일을 제거할 수 있다.
 *
 * @function deleteAllTodo
 */
const deleteAllTodo = () => {};

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 *
 * @function deleteTag
 * @param {string} id
 * @param {string} tag
 */
const deleteTag = () => {};

/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 *
 * @function deleteAllTags
 * @param {string} id
 */
const deleteAllTags = (id) => {};
