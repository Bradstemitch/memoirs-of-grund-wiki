export function dnd5e_magicProperty_plus(
  base: any,
  plus: number,
  otherName?: string
) {
  const origin = base[0];
  return [
    {
      ...origin,
      name: otherName || origin.name,
      system: {
        ...origin.system,
        properties: [...origin.system.properties, `mgc`],
        magicalBonus: plus,
      },
    },
  ];
}
