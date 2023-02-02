type Mods = Record<string, boolean | string>;

export const classNames = (
	cls: string,
    mods: Mods,
    additional: string[],
): string => {
	return [
		cls,
		...additional,
		Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([cls, _]) => cls),
	].join(' ');
};
