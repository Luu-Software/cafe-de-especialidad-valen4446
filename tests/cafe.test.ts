import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.mock('readline-sync', () => ({
  default: { question: vi.fn() },
}));

describe('Café de especialidad', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.resetModules();
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  async function ejecutar(total: string, estudiante: string, personas: string) {
    const rl = await import('readline-sync');
    vi.mocked(rl.default.question)
      .mockReturnValueOnce(total)
      .mockReturnValueOnce(estudiante)
      .mockReturnValueOnce(personas);
    await import('../src/index.ts');
  }

  it('aplica 10% de descuento para estudiantes ORT', async () => {
    await ejecutar('1000', 'si', '1');
    expect(consoleSpy).toHaveBeenCalledWith('Total por persona: $900');
  });

  it('no aplica descuento si no son estudiantes', async () => {
    await ejecutar('1000', 'no', '1');
    expect(consoleSpy).toHaveBeenCalledWith('Total por persona: $1000');
  });

  it('divide correctamente entre varias personas', async () => {
    await ejecutar('900', 'no', '3');
    expect(consoleSpy).toHaveBeenCalledWith('Total por persona: $300');
  });

  it('no aplica descuento con "Si" (mayúscula)', async () => {
    await ejecutar('1000', 'Si', '1');
    expect(consoleSpy).toHaveBeenCalledWith('Total por persona: $1000');
  });

  it('divide entre 2 personas con resultado decimal', async () => {
    await ejecutar('1000', 'no', '2');
    expect(consoleSpy).toHaveBeenCalledWith('Total por persona: $500');
  });
});
