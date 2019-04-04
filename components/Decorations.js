import React from "react";
import { Svg } from 'expo';

export class Moustache extends React.Component {
  render() {
    return (
      <Svg height="100" width="100" viewBox="0 0 459 496">
      <Svg.Path
        stroke="blue"
        fill="blue"
        d="M298.838,298.155c-7.887-2.212-15.59-5.034-23.04-8.44c-22.44-10.44-37.28-24-45.92-38.72
	c-8.64,14.6-23.48,28.28-45.92,38.72c-7.446,3.447-15.149,6.309-23.04,8.56c-27.796,8.273-57.383,8.384-85.24,0.32
	c-30.186-9.008-54.935-30.747-67.76-59.52c-2.986-6.463-5.461-13.15-7.4-20c-1.717-5.04,0.977-10.517,6.017-12.234
	c4.278-1.457,8.994,0.253,11.343,4.114c13.8,16.92,25.28,22.68,35.44,21.76s21.32-9,32-19.32c2.56-2.44,6.56-6.44,10.64-10.52
	c8-8,16.8-16.76,25.96-24.48c29.64-25.04,58.84-28,80.8-18.4c11.192,4.846,20.659,12.961,27.16,23.28
	c6.511-10.326,15.993-18.441,27.2-23.28c21.96-9.44,51.16-6.64,80.8,18.4c9.16,7.72,17.8,16.36,25.96,24.48c4,4,8,8,10.68,10.52
	c10.8,10.32,21.44,18.4,32,19.32s21.64-4.84,35.44-21.76c3.053-4.362,9.064-5.423,13.425-2.37c3.376,2.363,4.877,6.611,3.735,10.57
	c-1.939,6.85-4.414,13.537-7.4,20c-12.853,28.727-37.598,50.418-67.76,59.4c-27.857,8.064-57.444,7.953-85.24-0.32"/>
    </Svg>
    )
  }
}

export class Glasses extends React.Component {
  render () {
    return (
   <Svg height="100" width="100" viewBox="0 0 60 60">
     <Svg.Path
       stroke="black"
       fill="red"
       d="M59,28h-3c-0.064,0-0.12,0.025-0.181,0.036C54.911,22.9,50.512,19,45.072,19c-5.344,0-9.802,3.761-10.842,8.764
	c-1.339-1.155-2.729-1.753-4.153-1.764c-0.013,0-0.026,0-0.039,0c-1.445,0-2.87,0.604-4.257,1.785
	C24.777,22.771,20.424,19,15.072,19C9.294,19,4.555,23.4,4.05,29.01C4.033,29.009,4.018,29,4,29H1c-0.553,0-1,0.448-1,1s0.447,1,1,1
	h3c0.018,0,0.033-0.009,0.05-0.01C4.555,36.6,9.294,41,15.072,41c5.979,0,10.699-4.711,10.908-10.598
	C27.371,28.814,28.735,28,30.038,28c0.008,0,0.017,0,0.024,0c1.289,0.01,2.62,0.821,3.958,2.395C34.231,36.286,39.092,41,45.072,41
	C51.188,41,56,36.075,56,30h3c0.553,0,1-0.448,1-1S59.553,28,59,28z"
     />
   </Svg>
    );
  }
}

export class Hat extends React.Component {
  render () {
    return (
   <Svg height="100" width="100" viewBox="0 0 511 512">

   <Svg.Path d="m456.394531 27.308594c-9.316406-10.304688-80.503906-27.308594-200.59375-27.308594-120.089843 0-191.285156 17.003906-200.59375 27.3125.195313.183594.4375.398438.742188.640625 14.160156 11.429687 73.726562 23.457031 160.867187 26.285156 12.449219.402344 25.445313.609375 38.984375.617188 108.179688 0 183.667969-13.835938 199.785157-26.859375.332031-.265625.597656-.492188.808593-.6875zm0 0"/>
   <Svg.Path d="m445.59375 52.847656c-1.117188.378906-2.355469.730469-3.53125 1.09375-1.835938.582032-3.683594 1.15625-5.652344 1.707032-1.460937.410156-3.007812.804687-4.539062 1.199218-1.871094.480469-3.769532.953125-5.734375 1.414063-1.617188.375-3.253907.75-4.9375 1.109375-2.117188.457031-4.300781.898437-6.511719 1.332031-1.632812.320313-3.238281.648437-4.921875.953125-2.929687.539062-5.964844 1.042969-9.03125 1.542969-1.398437.226562-2.769531.457031-4.191406.671875-3.753907.578125-7.59375 1.125-11.519531 1.648437-1.628907.214844-3.300782.414063-4.957032.617188-2.898437.367187-5.816406.714843-8.792968 1.050781-1.8125.203125-3.636719.398438-5.472657.585938-2.960937.3125-5.953125.605468-8.972656.886718-1.804687.167969-3.597656.339844-5.417969.5-3.476562.300782-6.988281.578125-10.519531.847656-1.359375.101563-2.703125.214844-4.070313.316407-4.894531.347656-9.828124.664062-14.800781.949219-1.191406.066406-2.378906.121093-3.570312.183593-3.851563.207031-7.707031.394531-11.574219.566407-1.757812.074218-3.511719.140624-5.269531.207031-3.402344.132812-6.804688.25-10.203125.355469-1.792969.050781-3.578125.105468-5.371094.148437-3.546875.09375-7.082031.164063-10.605469.222656-1.546875.023438-3.097656.058594-4.640625.074219-5.019531.070312-10.027344.113281-14.984375.113281-4.960937 0-9.964843-.042969-14.996093-.105469-1.539063-.019531-3.089844-.050781-4.636719-.078124-3.53125-.0625-7.066407-.132813-10.605469-.21875-1.785156-.046876-3.566406-.097657-5.355469-.152344-3.4375-.101563-6.871093-.21875-10.304687-.355469-1.707032-.066406-3.414063-.128906-5.117188-.203125-4.023437-.175781-8.035156-.371094-12.03125-.589844-1.027344-.054687-2.066406-.101562-3.09375-.160156-5.035156-.285156-10.039062-.609375-15.003906-.964844-1.15625-.082031-2.285156-.179687-3.441406-.265625-3.777344-.28125-7.527344-.585937-11.25-.90625-1.625-.144531-3.222656-.296875-4.835938-.445312-3.25-.304688-6.46875-.621094-9.652344-.953125-1.648437-.171875-3.28125-.347656-4.90625-.527344-3.308593-.367188-6.558593-.761719-9.78125-1.167969-1.320312-.167969-2.660156-.324219-3.964843-.496093-4.460938-.589844-8.84375-1.207032-13.089844-1.871094-.335937-.050782-.652344-.113282-.988281-.164063-3.867188-.609375-7.625-1.25-11.277344-1.925781-1.28125-.234375-2.5-.484375-3.75-.730469-2.664062-.515625-5.269531-1.046875-7.796875-1.59375-1.355469-.296875-2.679687-.597656-3.996094-.902343-2.375-.546876-4.660156-1.117188-6.886719-1.699219-1.191406-.3125-2.40625-.617188-3.554687-.9375-2.535156-.707031-4.929687-1.441407-7.25-2.195313-.671875-.21875-1.40625-.421875-2.058594-.640625l-.300781-.089843c9.652344 37.035156 19.894531 115.78125 17.28125 282.625l.226562.1875c.617188.515624 1.316407 1.082031 2.125 1.703124l.4375.328126c.890626.671874 1.871094 1.382812 2.992188 2.152343l.136719.09375c1.121093.765625 2.394531 1.585938 3.757812 2.429688l.628907.390625c1.363281.832031 2.871093 1.699218 4.480468 2.585937.304688.167969.613282.339844.929688.507813 1.652344.894531 3.433594 1.808594 5.339844 2.746094.34375.164062.699218.335937 1.050781.5 2.011719.960937 4.136719 1.933593 6.433593 2.914062.25.105469.523438.214844.777344.320312 2.332032.984376 4.800782 1.96875 7.4375 2.953126l.5625.214843c2.675782.988281 5.554688 1.972657 8.554688 2.941407.472656.152343.9375.308593 1.417968.457031 2.960938.9375 6.097657 1.859375 9.378907 2.761719.589843.160156 1.191406.324218 1.792969.484374 3.351562.898438 6.859374 1.769532 10.539062 2.613282.582031.128906 1.183594.257812 1.773438.386718 3.875.863282 7.898437 1.695313 12.148437 2.46875.261719.046876.539063.09375.800781.140626 4.226563.765624 8.660156 1.480468 13.265625 2.148437.484375.070313.945313.144531 1.4375.214844 4.609375.648437 9.453125 1.234375 14.453125 1.769531.828125.09375 1.652344.183594 2.492188.265625 4.964844.507813 10.121094.945313 15.476562 1.320313.949219.066406 1.914063.128906 2.875.191406 5.492188.351562 11.160156.644531 17.0625.847656.777344.027344 1.585938.039062 2.371094.066406 6.28125.199219 12.734375.320313 19.488281.320313 6.753907 0 13.207031-.121094 19.484375-.3125.785156-.023438 1.59375-.039063 2.371094-.0625 5.902344-.203125 11.574219-.496094 17.0625-.851563.960938-.0625 1.925781-.125 2.875-.1875 5.347656-.375 10.507812-.816406 15.476562-1.320312.839844-.085938 1.664063-.175782 2.492188-.265625 5-.535157 9.84375-1.121094 14.457031-1.773438.488281-.066406.949219-.144531 1.433594-.214843 4.605469-.667969 9.039063-1.382813 13.265625-2.148438.261719-.046875.542969-.089844.800781-.136719 4.253907-.78125 8.273438-1.613281 12.148438-2.46875.589843-.132812 1.1875-.257812 1.773437-.390625 3.683594-.839844 7.1875-1.714844 10.539063-2.609375.601562-.164062 1.203125-.324219 1.796875-.488281 3.277344-.902344 6.414062-1.820312 9.375-2.757812.484375-.152344.945312-.308594 1.417968-.457032 3-.972656 5.878907-1.953125 8.558594-2.945312l.5625-.214844c2.632813-.980469 5.105469-1.96875 7.433594-2.949219.253906-.105469.527344-.214843.777344-.320312 2.296875-.980469 4.421875-1.953125 6.433594-2.914063.351562-.167968.710937-.335937 1.050781-.503906 1.910156-.929688 3.6875-1.84375 5.339843-2.742188.316407-.171874.625-.339843.929688-.507812 1.609375-.890625 3.117188-1.757812 4.480469-2.589844.214843-.128906.410156-.257812.621093-.386718 1.367188-.84375 2.640626-1.664063 3.765626-2.433594l.136718-.089844c1.121094-.769531 2.101563-1.484375 2.988282-2.15625l.441406-.328125c.808594-.621094 1.507812-1.1875 2.125-1.699219l.226562-.191406c-2.617187-166.839844 7.625-245.589844 17.277344-282.625zm-354.363281 38.582032c0-5.050782 4.09375-9.144532 9.140625-9.144532 5.050781 0 9.144531 4.09375 9.144531 9.144532 0 5.046874-4.09375 9.140624-9.144531 9.140624-5.046875 0-9.140625-4.09375-9.140625-9.140624zm18.285156 146.285156c-5.050781 0-9.144531-4.09375-9.144531-9.144532 0-36.667968-1.425782-70.214843-4.25-99.699218-.230469-2.414063.503906-4.820313 2.046875-6.691406 1.542969-1.871094 3.765625-3.050782 6.175781-3.28125 2.421875-.261719 4.84375.464843 6.71875 2.015624 1.878906 1.546876 3.050781 3.785157 3.257812 6.210938 2.882813 30.066406 4.335938 64.199219 4.335938 101.445312 0 5.050782-4.09375 9.144532-9.140625 9.144532zm0 0"/>
   <Svg.Path d="m428.875 357.78125-.035156.019531c-.171875.109375-.375.226563-.550782.335938-1.605468 1.003906-3.355468 2.035156-5.210937 3.082031-.644531.363281-1.324219.726562-2 1.089844-1.585937.859375-3.257813 1.726562-5.019531 2.597656-.738282.367188-1.457032.730469-2.226563 1.097656-2.523437 1.203125-5.167969 2.410156-8.046875 3.617188-.160156.066406-.34375.132812-.503906.199218-2.71875 1.128907-5.636719 2.25-8.6875 3.355469-.976562.359375-2 .707031-3.015625 1.058594-2.480469.863281-5.0625 1.710937-7.757813 2.546875-1.089843.339844-2.152343.679688-3.28125 1.011719-3.785156 1.125-7.710937 2.222656-11.914062 3.273437l-.46875.109375c-4.035156 1-8.320312 1.945313-12.757812 2.859375-1.375.285156-2.808594.550782-4.226563.824219-3.507813.675781-7.140625 1.320313-10.898437 1.933594-1.523438.246093-3.015626.5-4.582032.738281-5.246094.792969-10.648437 1.539062-16.367187 2.183594l-.367188.035156c-5.574219.625-11.457031 1.152344-17.507812 1.617188-1.839844.140624-3.742188.257812-5.628907.382812-4.695312.3125-9.535156.574219-14.515624.78125-2.003907.082031-3.980469.171875-6.03125.238281-6.917969.222657-14.011719.375-21.472657.375-7.460937 0-14.554687-.152343-21.472656-.371093-2.050781-.066407-4.027344-.160157-6.03125-.242188-4.980469-.207031-9.820313-.46875-14.519531-.777344-1.882813-.125-3.785156-.242187-5.625-.382812-6.050782-.46875-11.929688-.992188-17.507813-1.617188l-.367187-.035156c-5.722656-.648438-11.125-1.394531-16.371094-2.1875-1.5625-.234375-3.054688-.488281-4.578125-.738281-3.757813-.613281-7.390625-1.257813-10.902344-1.933594-1.417969-.273437-2.847656-.539063-4.226562-.824219-4.4375-.914062-8.722657-1.859375-12.757813-2.859375l-.46875-.109375c-4.203125-1.046875-8.128906-2.148437-11.914062-3.269531-1.128906-.335937-2.195313-.675781-3.28125-1.015625-2.691406-.835938-5.277344-1.683594-7.757813-2.546875-1.011719-.351563-2.035156-.699219-3.015625-1.054687-3.046875-1.109376-5.964844-2.230469-8.683594-3.359376-.164062-.066406-.347656-.132812-.507812-.199218-2.878906-1.203125-5.523438-2.410156-8.046875-3.617188-.769531-.363281-1.484375-.730468-2.226563-1.097656-1.757812-.871094-3.433593-1.738281-5.019531-2.59375-.671875-.367188-1.355469-.734375-2-1.09375-1.867187-1.050781-3.625-2.085938-5.242187-3.097656-.164063-.105469-.355469-.210938-.519532-.316406l-.039062-.023438-.015625.632812c-.175781 8.425782-.367187 16.996094-.628906 25.855469.03125.210938 4.308593 63.730469 173.726562 63.730469 5.25 0 10.339844-.0625 15.273438-.183594 1.480469-.035156 2.851562-.109375 4.304687-.152344 3.390625-.109374 6.796875-.210937 10.039063-.367187 1.765625-.085937 3.410156-.214844 5.128906-.316406 2.792969-.167969 5.625-.320313 8.308594-.527344 1.839843-.140625 3.566406-.320313 5.351562-.476563 2.425781-.214843 4.894531-.417968 7.230469-.660156 1.804688-.191406 3.496094-.417968 5.25-.628906 2.179688-.257812 4.398438-.503906 6.488281-.789062 1.730469-.234376 3.355469-.503907 5.03125-.757813 1.984375-.300781 4.003907-.585937 5.910157-.914063 1.625-.273437 3.152343-.578124 4.71875-.867187 1.832031-.339844 3.699218-.671875 5.457031-1.03125 1.527343-.3125 2.960937-.652344 4.433593-.980469 1.671876-.371094 3.371094-.734375 4.972657-1.125 1.421875-.34375 2.757812-.710937 4.128906-1.070312 1.539063-.40625 3.105469-.800782 4.582031-1.222656 1.316406-.375 2.550782-.765626 3.816406-1.152344 1.40625-.429688 2.832032-.855469 4.179688-1.300782 1.21875-.402343 2.363281-.820312 3.53125-1.226562 1.289062-.457031 2.59375-.902344 3.820312-1.371094 1.113282-.421875 2.164063-.855468 3.230469-1.289062 1.171875-.472656 2.355469-.941406 3.472657-1.421875 1.035156-.445313 2.003906-.898438 2.992187-1.351563 1.046875-.480468 2.109375-.960937 3.109375-1.453125.945312-.460937 1.832031-.929687 2.734375-1.398437.941406-.492188 1.894531-.980469 2.785156-1.476563.859375-.476562 1.667969-.953125 2.480469-1.433593.847656-.5 1.699219-.996094 2.5-1.496094.773438-.484375 1.5-.96875 2.230469-1.453125.753906-.5 1.511719-1 2.226562-1.503907.695313-.488281 1.351563-.980468 2.007813-1.46875.660156-.492187 1.328125-.992187 1.949218-1.484374.625-.492188 1.210938-.988282 1.796876-1.476563.582031-.492187 1.164062-.980469 1.710937-1.464844s1.070313-.980469 1.585937-1.46875c.515626-.488281 1.007813-.957031 1.480469-1.433593.476563-.472657.9375-.964844 1.386719-1.441407.445312-.480469.875-.9375 1.277344-1.398437.421875-.476563.816406-.945313 1.203125-1.414063.371093-.449219.738281-.898437 1.082031-1.339843.363281-.464844.703125-.921876 1.035156-1.378907.3125-.421875.617188-.847656.902344-1.261719.3125-.457031.605469-.902343.886719-1.34375.253906-.390624.496093-.78125.726562-1.164062.261719-.4375.511719-.867188.746094-1.289062.203125-.367188.402344-.730469.589844-1.082032.214843-.410156.414062-.8125.605469-1.207031.160156-.328125.3125-.652344.457031-.96875.175781-.394531.34375-.777344.496093-1.144531.117188-.289063.230469-.570313.335938-.84375.140625-.359375.273438-.710938.386719-1.046875.089843-.253907.171875-.496094.25-.734375.101562-.320313.199219-.628906.285156-.917969.058594-.210937.117187-.417969.171875-.617187.074219-.273438.140625-.546876.199219-.792969l.105469-.46875c.050781-.238281.097656-.46875.136718-.667969l.050782-.304688c.035156-.195312.0625-.386718.082031-.535156l.015625-.125.039062-.371094c-.078125-2.742187-.121094-5.320312-.191406-8.023437-.15625-5.824219-.296875-11.59375-.421875-17.304687zm0 0"/>
   <Svg.Path d="m504.195312 343.355469c-10.148437-15.238281-42.148437-5.390625-57.300781 1.191406.246094 12.542969.507813 25.597656.90625 39.1875v.265625c0 3.046875-1.789062 68.152344-143.40625 80.332031-14.652343 1.257813-30.796875 1.953125-48.59375 1.953125-189.820312 0-192-78.921875-192-82.285156.398438-13.84375.660157-26.910156.90625-39.457031-11.914062-5.390625-24.722656-8.527344-37.78125-9.253907-7.453125-.796874-14.804687 2.238282-19.519531 8.066407-13.863281 20.804687-10.667969 61.238281 43.964844 106.765625 44.382812 36.976562 120.875 60.074218 204.617187 61.789062 83.785157-1.820312 160.035157-24.917968 204.242188-61.789062 54.632812-45.527344 57.828125-85.960938 43.964843-106.765625zm0 0"/>
   </Svg>
    );
  }
}
